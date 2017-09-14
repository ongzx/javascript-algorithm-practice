class Vertex {
    constructor(key) {
        this.id = key;
        this.connectedTo = {}
    }

    addNeighbour(nbr, weight = 0) {
        this.connectedTo[nbr] = weight;
    }

    getConnections() {
        return Object.keys(this.connectedTo);
    }

    getId() {
        return this.id;
    }

    getWeight(nbr) {
        return this.connectedTo[nbr]
    }
}

class Graph {
    constructor() {
        this.vertList = {};
        this.numVertices = 0;
    }

    addVertex(key) {
        this.vertList[key] = new Vertex(key);
        this.numVertices += 1;
        return this.vertList[key];
    }

    getVertex(key) {
        if (this.vertList[key]) {
            return this.vertList[key]
        } else {
            return null;
        }
    }

    addEdge(f,t,cost = 0) {
        if (this.vertList[f] == null) {
            let newVertex = this.addVertex(f);
        }
        if (this.vertList[t] == null) {
            let newVertex = this.addVertex(t);
        }
        this.vertList[f].addNeighbour(this.vertList[t], cost);
    }

    contains(key) {
        return this.vertList[key];
    }

    getVertices() {
        return Object.keys(this.vertList);
    }
    
}