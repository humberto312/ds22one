function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
  }
  function preorder(n){
    if (n!==null){
      console.log(n.d)
      preorder(n.l)
      preorder(n.r)
    }
  }
  function inorder(n){
    if (n!==null){
      inorder(n.l)
      console.log(n.d)
      inorder(n.r)
    }
  }
  function posorder(n){
    if (n!==null){
      posorder(n.l)
      posorder(n.r)
      console.log(n.d)
    }
  }
  let r = new Node (55) 
  r.d = 56
  let o1 = new Node (56)
  let o2 = new Node (14)
  let o3 = new Node (81)
  let o4 = new Node (13)
  let o5 = new Node (18)
  let o6 = new Node (24)
  r.l = o1
  r.r = o2
  r.w = o3
  r.x = o4
  r.y = o5
  r.z = o6
