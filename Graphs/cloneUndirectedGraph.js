// leet code question - tested on leet code, not here - working code

// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

var cloneGraph = function(graph) {
    const node = graph
    if (node === null) return null
    let queue = [node];
    const visitedClones = {};
    
    // first loop creating semi copies
    while (queue.length !== 0) {
        let cur = queue.shift();
        let cloned = new UndirectedGraphNode(cur.label);
        visitedClones[cur.label] = cloned;
        if (cur.neighbors !== undefined) {
            for (let i = 0; i < cur.neighbors.length; i++) {
                if (visitedClones[cur.neighbors[i].label] === undefined) {
                    queue.push(cur.neighbors[i]);
                } 
            }
        }
    }
    queue = [node];
    
    // second loop - connecting all the copied nodes hence making them complete
    
    while (queue.length !== 0) {
        let cur = queue.shift();
        let clonedCur = visitedClones[cur.label]
        if (cur.neighbors !== undefined && clonedCur.neighbors.length === 0) {
            for (let neigh of cur.neighbors) {
                // console.log(neigh.label);
                queue.push(neigh)
                clonedCur.neighbors.push(visitedClones[neigh.label]);
                
            }
        }
    }

    return visitedClones[node.label]
};