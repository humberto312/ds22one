/** the PROBLEM with arrays
 *
 * for instance, create 100,000, then:
 * insert a new element at position 3
 * remove element at position 4
 * think about the number of operations that have to be carried out
 *
 * this section has NOT exercises
 */
let vec = [];
for(i=0; i<100000;i++){
  vec[i]=Math.floor(Math.random()*100000+1)
}
delete vec[4];
  vec.splice(3, 5, "new");
  console.log(vec);
