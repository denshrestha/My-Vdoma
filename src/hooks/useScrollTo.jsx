export const useScrollTo = (nodeId) => {
    if(!nodeId) return

    const node = document.getElementById(nodeId)
    node.scrollIntoView()
}