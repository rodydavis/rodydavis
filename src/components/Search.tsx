import React, { useState, useEffect } from "react";
import {
  Search as SearchIcon,
  Code2,
  FileText,
  Image as ImageIcon,
  Video,
  Sparkles,
  SlidersHorizontal,
  ArrowUpRight,
  Layers,
  Database,
  Hash,
} from "lucide-react";
import type { HybridSearchMatch } from "../workers/content-index";

type ModalityFilter = "all" | "text" | "code" | "image" | "video";
type SearchMode = "hybrid" | "vec" | "fts" | "rag";

interface SearchApiResponse {
  query: string;
  mode: SearchMode;
  modality: string;
  rrf_k?: number;
  weight_vec?: number;
  weight_fts?: number;
  sqlite_vec_version?: string;
  embedding_model?: string;
  llm_model?: string;
  total_docs?: number;
  total_chunks?: number;
  modalities?: Record<string, number>;
  rag?: string | null;
  matches: HybridSearchMatch[];
}

const MODALITY_OPTIONS: Array<{
  id: ModalityFilter;
  label: string;
  icon: React.FC<{ size?: number; className?: string }>;
}> = [
  { id: "all", label: "All", icon: Layers },
  { id: "text", label: "Docs", icon: FileText },
  { id: "code", label: "Code", icon: Code2 },
  { id: "image", label: "Images", icon: ImageIcon },
  { id: "video", label: "Videos", icon: Video },
];

const SUGGESTED_QUERIES = [
  "sqlite vector search embeddinggemma",
  "flutter signals hooks state management",
  "astro ssr server setup",
  "infinite canvas pan zoom flutter",
  "lit web components monaco editor",
];

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modality, setModality] = useState<ModalityFilter>("all");
  const [mode, setMode] = useState<SearchMode>("hybrid");
  const [weightVec, setWeightVec] = useState(1.0);
  const [weightFts, setWeightFts] = useState(1.0);
  const [showWeights, setShowWeights] = useState(false);

  const [data, setData] = useState<SearchApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  // Read initial ?q= from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const mod = params.get("modality") as ModalityFilter | null;
    const m = params.get("mode") as SearchMode | null;
    if (q) setSearchQuery(q);
    if (mod && ["all", "text", "code", "image", "video"].includes(mod)) {
      setModality(mod);
    }
    if (m && ["hybrid", "vec", "fts", "rag"].includes(m)) {
      setMode(m);
    }
  }, []);

  // Debounced live hybrid search against /api/search.json
  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (searchQuery.trim()) params.set("q", searchQuery.trim());
        params.set("modality", modality);
        params.set("mode", mode);
        params.set("weight_vec", String(weightVec));
        params.set("weight_fts", String(weightFts));
        params.set("k", "24");

        const res = await fetch(`/api/search.json?${params.toString()}`, {
          signal: controller.signal,
        });
        if (res.ok) {
          const json = (await res.json()) as SearchApiResponse;
          setData(json);
        }
      } catch (err: any) {
        if (err?.name !== "AbortError") {
          console.error("Hybrid search error:", err);
        }
      } finally {
        setLoading(false);
      }
    }, searchQuery.trim() ? 180 : 0);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchQuery, modality, mode, weightVec, weightFts]);

  const matches = data?.matches || [];

  return (
    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden bg-[var(--bg-main)] text-[var(--fg-primary)]">
      {/* Left Search Control & Quick List Sidebar */}
      <div className="w-full md:w-80 bg-[var(--bg-sidebar)] border-b md:border-b-0 md:border-r border-[var(--border-main)] flex flex-col shrink-0 max-h-[45vh] md:max-h-full">
        <div className="p-3.5 border-b border-[var(--border-main)] space-y-3">
          <div className="flex items-center justify-between">
            <span className="uppercase font-bold text-[11px] tracking-wider text-[var(--fg-secondary)] flex items-center gap-1.5">
              <SearchIcon size={13} />
              Hybrid Vector Search
            </span>
            <button
              type="button"
              onClick={() => setShowWeights((v) => !v)}
              className={`p-1 rounded hover:bg-[var(--hover-bg)] text-xs flex items-center gap-1 ${
                showWeights ? "text-[var(--header-h1)]" : "text-[var(--fg-secondary)]"
              }`}
              title="Configure Reciprocal Rank Fusion (RRF) weights"
            >
              <SlidersHorizontal size={13} />
              <span className="text-[10px] font-mono">RRF</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              autoFocus
              type="text"
              placeholder="Search chunks, code, images, videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--input-bg)] border border-[var(--border-main)] focus:border-[#007acc] text-[var(--fg-primary)] px-3 py-1.5 outline-none text-xs rounded placeholder-gray-500"
            />
          </div>

          {/* Modality Filter Pills */}
          <div className="flex flex-wrap gap-1">
            {MODALITY_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const active = modality === opt.id;
              const count =
                opt.id === "all"
                  ? data?.total_chunks
                  : data?.modalities?.[opt.id];
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setModality(opt.id)}
                  className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition-colors border ${
                    active
                      ? "bg-[#007acc]/20 text-[var(--fg-primary)] border-[#007acc]"
                      : "bg-[var(--bg-main)] text-[var(--fg-secondary)] border-[var(--border-main)] hover:text-[var(--fg-primary)]"
                  }`}
                >
                  <Icon size={11} />
                  <span>{opt.label}</span>
                  {typeof count === "number" && (
                    <span className="text-[9px] opacity-70 font-mono">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Mode Selector */}
          <div className="grid grid-cols-4 gap-1 bg-[var(--bg-main)] p-1 rounded border border-[var(--border-main)] text-[10px]">
            {(
              [
                { id: "hybrid", label: "Hybrid RRF" },
                { id: "vec", label: "vec0 KNN" },
                { id: "fts", label: "FTS5 BM25" },
                { id: "rag", label: "Gemma 4 RAG" },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={`py-1 px-1 rounded font-medium truncate transition-colors ${
                  mode === m.id
                    ? "bg-[#007acc] text-white"
                    : "text-[var(--fg-secondary)] hover:text-[var(--fg-primary)]"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* RRF Weights Drawer */}
          {showWeights && (
            <div className="p-2.5 rounded bg-[var(--bg-main)] border border-[var(--border-main)] space-y-2 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-[var(--fg-secondary)] font-mono">
                  weight_vec (sqlite-vec):
                </span>
                <span className="font-mono font-bold">{weightVec.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={weightVec}
                onChange={(e) => setWeightVec( parseFloat(e.target.value) )}
                className="w-full accent-[#007acc]"
              />
              <div className="flex items-center justify-between">
                <span className="text-[var(--fg-secondary)] font-mono">
                  weight_fts (FTS5 BM25):
                </span>
                <span className="font-mono font-bold">{weightFts.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={weightFts}
                onChange={(e) => setWeightFts( parseFloat(e.target.value) )}
                className="w-full accent-[#007acc]"
              />
            </div>
          )}
        </div>

        {/* Sidebar Quick Result List / Suggestions */}
        <div className="flex-1 overflow-y-auto divide-y divide-[var(--border-main)]/40">
          {!searchQuery.trim() ? (
            <div className="p-4 space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-[var(--fg-secondary)] font-semibold">
                Try Hybrid Queries
              </div>
              <div className="space-y-1.5">
                {SUGGESTED_QUERIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setSearchQuery(q)}
                    className="w-full text-left px-2.5 py-1.5 rounded bg-[var(--bg-main)] hover:bg-[var(--hover-bg)] border border-[var(--border-main)] text-xs text-[var(--fg-primary)] flex items-center justify-between group"
                  >
                    <span className="truncate">{q}</span>
                    <ArrowUpRight
                      size={12}
                      className="text-[var(--fg-secondary)] group-hover:text-[var(--header-h1)] shrink-0"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : loading && matches.length === 0 ? (
            <div className="p-4 text-xs text-[var(--fg-secondary)] font-mono">
              Running sqlite-vec + FTS5 CTE query...
            </div>
          ) : (
            matches.map((m) => {
              const href =
                m.slug === "welcome"
                  ? "/"
                  : m.headingSlug
                    ? `/${m.slug}#${m.headingSlug}`
                    : `/${m.slug}`;
              return (
                <a
                  key={m.chunkId}
                  href={href}
                  className="block px-3.5 py-2.5 hover:bg-[var(--hover-bg)] no-underline transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[var(--fg-primary)] truncate">
                      {m.title}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 shrink-0">
                      {Math.round(m.similarity * 100)}%
                    </span>
                  </div>
                  <div className="text-[11px] text-[var(--header-h2)] font-mono truncate mt-0.5">
                    § {m.heading}
                  </div>
                </a>
              );
            })
          )}
        </div>
      </div>

      {/* Main Hybrid Search Results Canvas */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Telemetry Header Bar */}
        <div className="h-[35px] px-6 border-b border-[var(--border-main)] bg-[var(--bg-sidebar)] flex items-center justify-between text-[11px] text-[var(--fg-secondary)] font-mono shrink-0 overflow-x-auto">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="flex items-center gap-1">
              <Database size={12} className="text-sky-400" />
              sqlite-vec {data?.sqlite_vec_version || "v0.1.9"}
            </span>
            <span>·</span>
            <span>{data?.embedding_model || "embeddinggemma-2:latest"} (768d)</span>
            <span>·</span>
            <span>{data?.llm_model || "gemma4:31b"}</span>
          </div>
          <div className="whitespace-nowrap">
            {searchQuery.trim()
              ? `${matches.length} chunk matches`
              : `${data?.total_docs || 131} docs · ${data?.total_chunks || 3300} multimodal chunks`}
          </div>
        </div>

        {/* Main Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-5xl w-full mx-auto">
          {/* Gemma 4 RAG Answer Panel */}
          {data?.rag && (
            <div className="p-5 rounded-xl bg-[var(--bg-sidebar)] border border-[#007acc]/60 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                  <Sparkles size={15} />
                  Gemma 4 Grounded Synthesis ({data.llm_model})
                </div>
                <span className="text-[10px] font-mono text-[var(--fg-secondary)]">
                  Top-6 Hybrid Chunks
                </span>
              </div>
              <div className="text-sm leading-relaxed text-[var(--fg-primary)] whitespace-pre-wrap">
                {data.rag}
              </div>
            </div>
          )}

          {!searchQuery.trim() ? (
            <div className="py-12 text-center space-y-3">
              <div className="inline-flex p-3 rounded-full bg-[var(--bg-sidebar)] border border-[var(--border-main)] text-sky-400">
                <SearchIcon size={28} />
              </div>
              <h2 className="text-lg font-bold text-[var(--fg-primary)] m-0">
                Multimodal Hybrid Vector + FTS5 Search
              </h2>
              <p className="text-xs text-[var(--fg-secondary)] max-w-lg mx-auto leading-relaxed">
                Powered by <code className="text-sky-400">embeddinggemma-2:latest</code> (768d text, code & vision embeddings) and <code className="text-emerald-400">sqlite-vec</code> + <code className="text-amber-400">FTS5</code> Reciprocal Rank Fusion in <code className="text-purple-400">celld</code>.
              </p>
            </div>
          ) : matches.length === 0 && !loading ? (
            <div className="py-12 text-center text-sm text-[var(--fg-secondary)]">
              No matching chunks found for "{searchQuery}".
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {matches.map((match) => {
                const href =
                  match.slug === "welcome"
                    ? "/"
                    : match.headingSlug
                      ? `/${match.slug}#${match.headingSlug}`
                      : `/${match.slug}`;

                const isHybridBoth =
                  match.vecRank !== null && match.ftsRank !== null;

                return (
                  <a
                    key={match.chunkId}
                    href={href}
                    className="group block p-4 rounded-xl bg-[var(--bg-sidebar)] border border-[var(--border-main)] hover:border-[#007acc] transition-all no-underline space-y-2.5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-[var(--bg-main)] border border-[var(--border-main)] text-[var(--fg-secondary)]">
                            {match.modality}
                          </span>
                          <h3 className="text-base font-bold text-[var(--fg-primary)] group-hover:text-[var(--header-h1)] m-0 truncate">
                            {match.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-mono text-[var(--header-h2)]">
                          <Hash size={12} />
                          <span className="truncate">{match.heading}</span>
                          <span className="text-[var(--fg-secondary)] opacity-60 ml-1">
                            (/{match.slug})
                          </span>
                        </div>
                      </div>

                      {/* Provenance Badges (vec_rank, fts_rank, RRF combined_rank) */}
                      <div className="flex items-center gap-1.5 flex-wrap shrink-0 font-mono text-[10px]">
                        {isHybridBoth && (
                          <span className="px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                            Hybrid Match
                          </span>
                        )}
                        {match.vecRank !== null && (
                          <span
                            className="px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20"
                            title={`Vector cosine distance: ${match.vecDistance}`}
                          >
                            vec #{match.vecRank} ({Math.round(match.similarity * 100)}%)
                          </span>
                        )}
                        {match.ftsRank !== null && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            fts #{match.ftsRank}
                          </span>
                        )}
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          RRF {match.combinedRank.toFixed(4)}
                        </span>
                      </div>
                    </div>

                    {/* Optional Image / Video Thumbnail + Snippet */}
                    <div className="flex flex-col sm:flex-row gap-3 items-start">
                      {match.mediaUrl && (
                        <div className="w-full sm:w-40 h-24 rounded-lg overflow-hidden bg-black/40 border border-[var(--border-main)] shrink-0">
                          <img
                            src={match.mediaUrl}
                            alt={match.heading}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div
                        className="text-xs text-[var(--fg-secondary)] leading-relaxed break-words flex-1 [&_mark]:bg-amber-500/30 [&_mark]:text-[var(--fg-primary)] [&_mark]:px-1 [&_mark]:rounded"
                        dangerouslySetInnerHTML={{ __html: match.snippet }}
                      />
                    </div>

                    {match.tags && match.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {match.tags.slice(0, 6).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-main)] text-[var(--fg-secondary)] border border-[var(--border-main)]"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
