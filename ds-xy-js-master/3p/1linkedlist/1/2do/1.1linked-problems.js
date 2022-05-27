/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, u object
 * @returns {bool} - true of false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
  function Node(data) {
     this.data = data
     this.next = null
  }
  
  
   let r=new Node(0)
   let p=new Node(1)
   r.next=p//link
  	
  
  for (let i=0;i<100;i++){
    	let random = Math.floor(Math.random() * 1000 + 1);
      let n = new Node("name" + random)
      p.next = n
      p=n
    	
  }

	console.log(r)
