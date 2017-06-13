'use strict';

/**
 * @method sexp
 * @param {String} name - the root name.
 * @param {Array} nodes - the array nodes which element could be any type
 */
function sexp(name, nodes) {
  if (!nodes) {
    nodes = [];
  }
  if (nodes && !Array.isArray(nodes)) {
    nodes = [nodes];
  }
  const root = new SNode(name, nodes);
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node instanceof SNode) {
      nodes[i].parent = root;
    }
  }
  return root;
}

/**
 * @class SNode
 */
class SNode {
  /**
   * @method constructor
   * @param {String} name - the root name
   * @param {Array} nodes - the array nodes
   */
  constructor(name, nodes) {
    this.name = name;
    this.nodes = nodes;
    this.parent = undefined;
  }
  /**
   * @method getRenderedNodes
   * @return {String} rendered string
   */
  getRenderedNodes() {
    return this.nodes.map((node) => {
      if (node && typeof node.toString === 'function') {
        return node.toString();
      } else {
        return node + '';
      }
    }).join(' ');
  }
  /**
   * @method toString
   * @return {String} the result string in s-express
   */
  toString() {
    const nodes = this.getRenderedNodes();
    if (nodes.length) {
      return `(${this.name} ${nodes})`;
    } else {
      return `(${this.name})`;
    }
  }
}

module.exports = sexp;
