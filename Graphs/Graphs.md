[TOC]

# Graphs

## Interview Strategy:

1. Can this problem be modeled into a Graph problem? (Are there pair wise relationship between objects given?)
2. Would a simple graph traversal help solve the problem?
3. Would some popular extension of it help solve the problem?
4. Code it up

----

Till now given set of N distinct objects:

1. Sorting: sort them
2. Combinatorial Enumeration: Enumerate all permutations/combinations (with some constraint filter)
3. Trees: Search for particular object 
4. Graphs: (+ m pair wise relationships - 1 way or 2 way) sorting problem on a graph mindful of pairwise relationships, find all possible paths start at s, end at d (combinatorial Enumeration), search an edge between u and v, a path between u and v, what if there are weights and you want shortest path(DP) 
5. Combinatorial Optimization: pick best possible Perm/Comb



## Konisberg Problem

> Can one walk accross the 7 bridges without crossing the same bridge twice?

### Euler's solution

#### Definitions

> ***Adjacent***: 2 vertices are said to be adjacent if there is an edge between them

> ***Path***: Sequence of adjacent vertices

> ***Cycle***: A path that starts and ends at the same vertex

> ***Degree of a Vertex***: number of edges sticking in or out of it

> ***Multigraph***: A graph which might have self loops or multiple edges between vertices

> ***Eulerian Cycle***: If there is a cycle in the graph which covers each edge exactly once

> ***Eulerian Path***: A path in a graph which covers each edge exactly once

> ***Hamiltonian cycle***: If there is a cycle in a graph whcih visits each vertex only once

> ***Hamiltonian path***: If there is a path which civers each vertex only once 

> ***Connected Graph***: A graph is connected if you can reach any vertext from any other vertex

> ***Connected components***: the disconnected pieces of a graph which is not connected

#### Theorems

> Every Eulerian Cycle is also a path but not vice versa

> A graph can have an Eulerian cycle or path even if not connected. This just means all the edges of the graph are in one connected component

> Eulerian cycle if present implies every vertex's degree is even and vice versa

> Eulerian Paths if present implies 0 or 2 edges have odd degrees in the graph

> In a directed graph, the directed counterpart is connected and the indegree of every vertex is equal to the out degree, then there exists an Eulerian cycle

> It is not possible for a connected undirected graph to have odd number of odd degree vertices

> A directed graph has an Eulerian path that starts and ends at teh different vertices if and only if :
>
> 1. There is exactly 1 vertex which has 1 out degree more than its in degrees
> 2. There is exactly 1 vertex which has 1 in degree more than its out degree
> 3. All other vertices have indegree = outdegree
> 4. The directed version of the graph is connected or all its edges are in one component

## Graph representations

#### 1. Edge List

**Time Complexity**: O(n^3^)
**Space Complexity**: O(m + n)

#### 2. Adjacency List

**Time Complexity**: O(n)
**Space Complexity**: O(m + n)

#### 3. Adjacency Matrix

**Time Complexity**: O(n^2^)

**Space Complexity**: O(n)

#### 4. Adjacency Map

**Time Complexity**: O(m x n)
**Space Complexity**: O(m x n)

## Graph Implementation - with Adjacency List

```js
class Graph {
  adjList = []
	v = 0

	constructor(size) {
    V = size
    adjList = new Array(size)
    for (let i = 0; i < size; i++) {
      asjLIst[i] = []
    }
	}
	
	addEdge(start, end, biDir = true) {
		adjList[start].push(end)
    if (biDir) {
      adjList[end].push(start)
    }
  }
	
// eulerian cycle
	hasEulerianCycle() {
    let odd = 0
    for (vertex of adjList) {
			if (vertex.length % 2 === 1) odd++
    }
    if (odd > 0) return false
    return true
  }
	
//eulerian path
	hasEulerianPath() {
		let odd = 0
    for (vertex of adjList) {
			if (vertex.length % 2 === 1) odd++
    }
    if (odd > 2) return false
    return true
  }
}
```

## Graph Traversal

```js
// Traversals
	
// general traversal pseudocode:
	function traversalOrSearch(root) {
		// captured and parent initialized to 0 and null
    
    const captured[s] = 1
    // [while there exists a fringe edge:]
    	// [pick 1 of them => (u,v)]
			captured[v] = 1
    	parent[v] = u
  }
}
```

- In BFS and DFS to avoid going in cycles we use visited array

> If threre is more than 1 vertex parent value = null after a BFS or DFS run, the graph is not connected

```js
function BFS(s) {
  // s = adjacency list / root or BFS
  
  // initialize visited, captured to 0 and parent to null
	const visited = []
  const captured = new Array(s.length).fill(0)
  const parent = new Array(s.length).fill(null)
  
  const q = new Queue()
	q.push(s)
  
  while (!q.isEmpty()) {
    let v = q.pop()
    
    // do what you have to do at this node
    
    captured[v] = 1
    for (let ele in adjList[v]) {
      if (visited[ele] === 0) {
        visited[ele] = 1
        parent[w] = v
        q.push(ele)
      }
    }
  }
}

function DFS_iterative(s) {
  // - > exactly same as BFS except uses Stack instead of Queue
  // s = adjacency list / root or BFS
  
  // initialize visited, captured to 0 and parent to null
	const visited = []
  const captured = new Array(s.length).fill(0)
  const parent = new Array(s.length).fill(null)
  
  const q = new Stack()
	q.push(s)
  
  while (!q.isEmpty()) {
    let v = q.pop()
    
    // do what you have to do at this node
    
    captured[v] = 1
    for (let ele in adjList[v]) {
      if (visited[ele] === 0) {
        visited[ele] = 1
        parent[w] = v
        q.push(ele)
      }
    }
  }
}

function DFS_recursive(S) {
	
  visited[s] = 1
  for (let ele of adjList[s]) {
    if (visited[ele] === 0) {
    	parent[ele] = s
    	DFS_recursive(ele)
    }
  }
}
```

- Time for all = O(m + n) : n for initialization, m for the loop
- Space complexity = O(n)
- BFS for undirected graph will have tree edges and cross edges(same or adjacent layer): cross edges => cycles
- DFS on undirected graphs will have tree edges and back edges usually: back edges => cycles

## Connected Components

- find the number of connected components of a graph.
- if there are more than 1 components and there are at least 2 vertices in more than 1 connected component, there cannot be an Eulerian cycle/path in it. (***Check for Eulerian path along with degree-of-nodes check***)

```js
// 1. build the adjacency list: input - num of vertices and list of edges
// 2. BFS or DFS
// 3. outer loop

function findComponents(n, edgeList) {
  let componentNum = 0
  const adjList = new Array(n);
  for (let i = 0; i < n; i++) {
    adjList[i] = []
  }
  
  // build undirected adjList
  for (let i = 0; i < edgeList.length; i++) {
    adjList[edgeList[i][0]] = edgeList[i][1]
    adjList[edgeList[i][1]] = edgeList[i][0]
  }
  
  const visited = new Array(n).fill(0)
  function DFS(node, num) {
		visited[i] = num
    for (let i = 0; i < n; i++) {
      if (visited[i] === 0) {
	      DFS(i, num)
      }
    }
	}
  
  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      componentNum++
      DFS(i, componentNum)
    }
    return componentNum
  }
}
```

## Problems of Undirected Graph from Class

### Graph Valid Tree

**Question**

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree

Example 1:

​	Input: n = 5, edges = [[0,1], [0,2], [0,3], [1,4]]

​	Output: true

Example 2:

​	Input: n = 5, edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]

​	Output: false

- Note: We assume here that no duplicate edges will appear among edges. Also the edges are undirectional here and so will be added twice to the adjacency list
- This question is asking if: 
  1. The graph is connected graph
  2. The graph doesnt have cycles

**Solution Strategy**

- BFS or DFS and the connected component check (which involves using BFS or DFS anyways) - so just modify the connected component code for this problem. 

- In BFS, if visites[i] !== 0 , before returning true, make sure the element is not the parent/current node
- It is easy to check this in BFS (using parent array) - we just need to check if there are cross edge and there are no back edges in Undirected BFS
- DFS will have back edges when there is a cycle. So, if it is visited and not a parent => cycle exists. for DFS recursive implementation, you need to consider the value returned by DFS recursive call as well

### Is Graph Bipartite?

**Problem**

Given an undirected graph, return true if and only if it is bipartite

A graph is Bipartite if we can split its set of nodes into 2 independent subsets A and B such that every edge in the graph has one Node in A and another node in B

Example:

​	Input: [[1,3], [0,2], [1,3], [0,2]] = adjacency list not edge list that is why no n is given

​	Output: true

​	We can divide the vertices into 2 groups: [0,2] [1,3]

**Solution Strategy**

- Just because there are cycles doesn't mean the graph is Bipartite or not
- If a graph has a cycle of odd length, then it is not bipartite. A tree or a cycle of even length is bipartite
- We go with *BFS* because cross edges between same levels indicate cycle of odd length in the Graph 
- To implement, use levels array to keep track of level of each element from source. While setting parent, set the distance from parent as well
- Even if no mention of not being a graph of conencted components is given, but we have to assume the graph might not be connected
- Can use DFS as well. We code the levels of DFS between 2 types of colors. The back edges should not connect to same colored nodes - then it is not bipartite

**Extension Problem**

- *Number of Islands* / *find the maximum area of an island*: Given a 2d map of 1s(land) and 0s(water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all 4 edges of the grid are all surrounded by water [hint: find neighbours dynamically, avoid visitors array entirely. change the values in a grid -> 1 to 0 or 3]
- Can you color the vertices of a graph using 2 colors so that adjacent vertices have different colors? *2 color problem*
- Given set of n people. Split them into 2 teams as each person might not like certain people
- *flood fill*: flood fill any area of a graph with given color when given a point on graph to flood fill at. Return modified image

## Directed Graphs

- You cannot ask if a graph is connected in directed graphs. *stringly connected* means you can reach one node from any other node on graph and vice versa
- BFS: will have cross edges and back edges as well. Only back edges will indicate a cycle in directed graphs. Cross edges will not create a cycle

## Problems in Directed Graphs from Class

- Find shortest path in directed Graph: use BFS
- To see if there is a cycle in directed graph: use DFS. BFS is messy here
- BFS is specialized algo where weight is 1 for edges
  - if weights: Dijkstra's
  - if Negative weights: Bellman Welford

### Snake and Ladder

**Problem**

Given Snake and Ladder game board, find the minimum number of throws to win the game

**Solution Strategy**

- you can see it is a directed graph as we go only forward when we throw a dice
- *build stage*: have hash maps for snakes and ladders
- have a visited array ? .. keep a slate? - no need for slate as it is not combinatorial problem (that is the brute force approach)
- have a visited array: do shortest number of dice throws, and distance array / solution array
- for each square in 1 -> 100, calculate the destination for 6 dice throws. 6 entries at most linked to each square
- OR : We can have a function `dice_throw()` which will calculate the value we get when we roll 1 , 2 ..., 6 using the hash maps constructed
- Edge cases: sometimes there might be no way to reach the last 6 squares at all having only snakes - then we can't succeed in finding shortest path
- outer loop is not needed here

### Cycle in directed Graph

**Problem**

Finding if directed graphs have cycles

**Solution Strategy**

- Add arrival and departure times to DFS Recursive. Only back edges create cycles. If no back edges => no cycles
- DFS has 4 edges: Tree, back, cross and forward edges
  - Tree edges: parent's A and D time is enclosing A and D time of the child. child -> parent : D decreases
  - Forward: Same with Forward Edge. child -> parent: D decreases
  - Back Edge: child's AD time encloses parents AD. Child -> parent: D increases
  - Cross edge: they are disjoint A and D of both nodes: child -> parent: D decreases

### Course Schedule

**Problem**

There are a total of n courses you have to take [0,n-1]. Some courses may have prerequisites, for example to take course 0, you have to first take course 1, which is expressed as a pair: (0,1)

Given total number of courses and a list of prerequisite pairs, is it possible to finish all courses?

Example:
	Input: 2, [[1,0]]
	Output: true

Example:
	Input: 2, [[1,0], [0,1]]
	Output: false

**Solution Strategy**

- Assume: no duplicates in the edge list given
- DFS with outer loop as graph can be not connected

### Class Schedule 2 / Topological Sort

**Problem**

Not only find out if you can take the course, but also return ordering of the courses

**Solution Strategy**

- after DFS, sort the edges by decreasing order of departure times
- OR: Add node in an array while recording departure time while doing DFS. Reverse the array in the end
- if I find cycles will just return an empty array
- DAG: Directed Acyclic Graphs - if you see this, then they will ask topological sort
- Kahn's method: Calculate and maintain an in-degree for each vertex. Keep all vertices with 0 indegree in a queue or stack. If graph is a DAG, there must be 1 vertex with 0 in degree. Make it the first verex in topological sort and delete all its outgoing edges. If any other vertex with in degree of 0 is found, add it to the queue or stack. Repeat untill all vertices are sorted T = O (V+E)
  1. build a graph
  2. find indegree of every node
  3. identify 0 indegree nodes. put in queue
  4. while bag is not empty: take a course and pretend you've taken that course
  5. put it into results and remove all the outgoign edges for it : for neighbours decrement in degree by 1
  6. if neighbour's indegree is 0, add it to the queue
  7. if there is a cycle, the queue will becoem empty and there will be no 0 in degree vertices left

### Find Critical Connections in a Network

**Problem**

There are n servers numbered from 0 to n-1connected by undirected server-to-server connections forming a netowrk where connections[i] = [a,b] where a and b are the servers. Any server can reach any other server dicrectly or indirectly through the graph
A critical connection is a connection if removed will make some server unable to reach soem other server
Return all critical connections in a network in any order

**Soution Strategy**

- use arrival and departure times and see arrival times as well