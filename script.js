//your code here
function sortingItem(arr){
    let sorted_arr = arr.sort((x,y)=> {
 //sorting the array lexographically
       if(x.startsWith("The")){
        x = x.slice(4);
       }
       if(x.startsWith("A")){
        x = x.slice(2);
       }
       if(x.startsWith("An")){
        x = x.slice(3);
       }
       if(y.startsWith("The")){
        y = y.slice(4);
       }
       if(y.startsWith("A")){
        y = y.slice(2);
       }
       if(y.startsWith("An")){
        y = y.slice(3);
       }
       if(x>y){
        return 1;
       }
       if(x<y)
       {
        return -1;
       }
      return 0;
    });
    return sorted_arr;
}

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
//calling a function named sortingItem
let output = sortingItem(touristSpots);
output.forEach((value)=>{
    const ans = document.createElement("li");
    ans.innerHTML = value;
    document.getElementById("bands").appendChild(ans);
});