interface Props {
  tag: string;
  active: boolean;
  onClick?: () => void;
  icon?: string;
}

function TagChip({ icon, tag, active, onClick }: Props) {
  return (
    <div
      style={{
        padding: "0.25rem 0.5rem",
        borderRadius: "0.25rem",
        backgroundColor: active ? "var(--tag-color)" : "var(--tag-background)",
        color: active ? "var(--tag-background)" : "var(--tag-color)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.25rem",
      }}
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          window.location.href = `/search?tags=${tag}`;
        }
      }}
    >
      {icon && <i class="material-icons" style={{
        fontSize: "1rem",
        width: "1rem",
        marginRight: "0.25rem",
      }}>{icon}</i>}
      {tag}
    </div>
  );
}

export default TagChip;
