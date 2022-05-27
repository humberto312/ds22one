/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * create a linked-list with 1000-random-names
 * 'name3', 'name99', ..., 'name7'
 *
 * then look 'name7' up
 * returns true
 *
 * then look 'name3007' up
 * returns false
 *
 * use the method contains
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
 function Node(data) {//constructor
     this.data = data
     this.next = null
  }
  
  
   let r=new Node(0)//root
   let p=new Node(1)//previous
   r.next=p//link
  	
  
  for (let i=0;i<100;i++){
    	let random = Math.floor(Math.random() * 1000 + 1);
      let n = new Node("name" + random)//next
      p.next = n//link
      p=n
    	
  }

	console.log(r)
