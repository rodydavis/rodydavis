// import { css, customElement, html, LitElement } from 'lit-element';
// import type { PostMeta } from '../utils/meta';
// //@ts-ignore
// import Viva from '../../third_party/vivagraph.js';

// @customElement('personal-graph')
// export class PersonalGraph extends LitElement {
//   constructor() {
//     super();
//   }

//   static styles = css`
//     * {
//       --graph-width: 100%;
//       --graph-height: 100vh;
//     }
//     #graphDiv {
//       /* position: absolute; */
//       width: var(--graph-width);
//       height: var(--graph-height);
//     }
//     #graphDiv > svg {
//       width: 100%;
//       height: 100%;
//     }
//   `;

//   async buildGraph() {
//     const graph = Viva.Graph.graph();
//     // const graphics = Viva.Graph.View.webglGraphics();
//     const graphics = Viva.Graph.View.svgGraphics();
//     await this.addNodes(graph);
//     const nodeSize = 24;

//     graphics
//       .node((node: { id: string; data: NodeData }) => {
//         const ui = Viva.Graph.svg('g');
//         const img = Viva.Graph.svg('image')
//           .attr('width', 24)
//           .attr('height', 24)
//           .link(node?.data?.image || 'images/icons/circle-filled.svg');
//         if (!node?.data?.hideText) {
//           const text = Viva.Graph.svg('text')
//             .text(node.id)
//             .attr('y', '35px')
//             .attr('x', '0px')
//             .attr('width', nodeSize)
//             .attr('height', nodeSize);
//           ui.append(text);
//         }
//         ui.append(img);
//         if (node?.data?.link) {
//           this.setupListener(
//             img,
//             node.data.link,
//             node?.data?.sameTab ? undefined : '_blank',
//           );
//         }
//         return ui;
//       })
//       .placeNode((nodeUI: any, pos: { x: number; y: number }) => {
//         nodeUI.attr(
//           'transform',
//           'translate(' + (pos.x - 12) + ',' + (pos.y - 12) + ')',
//         );
//       });

//     const element = this.shadowRoot?.getElementById('graphDiv');

//     const renderer = Viva.Graph.View.renderer(graph, {
//       container: element,
//       graphics: graphics,
//     });
//     renderer.run();
//     this.requestUpdate();
//   }

//   setupListener(node: any, link: string, target?: string) {
//     node.addEventListener('click', () => {
//       window.open(link, target, 'noopener');
//     });
//     node.addEventListener('mouseover', () => {
//       node.attr('color', 'red');
//       document.body.style.cursor = 'pointer';
//     });
//     node.addEventListener('mouseout', () => {
//       node.attr('color', 'green');
//       document.body.style.cursor = 'default';
//     });
//   }

//   async addNodes(graph: any) {
//     const tree = {
//       me: {
//         coding: {},
//         cooking: {},
//         social: {
//           twitter: {
//             link: 'https://twitter.com/rodydavis',
//             image: 'images/social/twitter.svg',
//             hideText: true,
//           },
//           tiktok: {
//             link: 'https://tiktok.com/@rodydavisjr',
//             image: 'images/social/tiktok.svg',
//             hideText: true,
//           },
//           linkedin: {
//             link: 'https://www.linkedin.com/in/rodydavis',
//             image: 'images/social/linkedin.svg',
//             hideText: true,
//           },
//           youtube: {
//             link: 'https://youtube.com/rodydavis',
//             image: 'images/social/youtube.svg',
//             hideText: true,
//           },
//           facebook: {
//             link: 'https://facebook.com/rodydavisjr',
//             image: 'images/social/facebook.svg',
//             hideText: true,
//           },
//           instagram: {
//             link: 'https://instagram.com/rodydavisjr',
//             image: 'images/social/instagram.svg',
//             hideText: true,
//           },
//         },
//         sports: {
//           hiking: {},
//           snowboarding: {},
//           skiing: {},
//           surfing: {},
//         },
//       },
//     };
//     const _posts:
//       | {
//           items: PostMeta[];
//         }
//       | undefined = await fetch('./blog/info.json')
//       .then((res) => res.text())
//       .then((data) => JSON.parse(data));
//     if (_posts) {
//       for (const post of _posts.items) {
//         if (post.categories) {
//           for (const item of post.categories) {
//             // @ts-ignore
//             if (!tree.me.coding[item]) tree.me.coding[item] = {};
//             // @ts-ignore
//             tree.me.coding[item][post.id] = {
//               image: '/images/icons/article.svg',
//               link: `/#/blog/${post.id}`,
//               sameTab: true,
//             };
//           }
//         }
//       }
//     }
//     this._exploreTree(graph, tree);
//   }

//   _exploreTree(
//     graph: any,
//     root: Object,
//     parent: string | undefined = undefined,
//   ) {
//     const keys = Object.keys(root);
//     for (const key of keys) {
//       // @ts-ignore
//       const data = root[key];
//       if (data?.link) {
//         graph.addNode(key, data);
//       } else {
//         graph.addNode(key, {});
//       }
//       if (parent) {
//         graph.addLink(key, parent);
//       }
//       if (!data?.link && data instanceof Object) {
//         this._exploreTree(graph, data, key);
//       }
//     }
//   }

//   async firstUpdated() {
//     await this.buildGraph();
//   }

//   render() {
//     return html`<div id="graphDiv"></div>`;
//   }
// }

// interface NodeData {
//   link?: string;
//   image?: string;
//   hideText?: boolean;
//   sameTab?: boolean;
// }
