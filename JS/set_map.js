//SET
setEx = new Set(["abc", "def", "ijk"])
setEx2 = new Set("abcab", "d", "ef")
console.log(setEx)
console.log(setEx2) //bracket for Set is not inside []

setEx.add("qwe") //add etc element in set
console.log(setEx)
setEx.delete("qwe") //del element inset
console.log(setEx)

//FOR OF USING SET ACCESS VALUE
for (const value of setEx) {
    console.log(value)
}

//FOR IN USING SET NO ACCESS FOR KEY AND VALUE
for (const key in setEx) {
    console.log(key) //no output
}

//MAP - Key, Value pair
//mapEx = new Map("ID", "15") output is error because no key-value pair exists
//mapEx = new Map(["id", "hii"]) output is err becaz it will not recognize proper key to store to iterate map
mapEx = new Map([
    ["ID","21ECR015"],
    ["Name", "Ananya"]
])
console.log(mapEx)
mapEx.set("Age",19)
mapEx.set("Clg","Kec")

console.log(mapEx)
mapEx.delete("Clg","Kec")
console.log(mapEx)


//FOR OF USING MAP
for (const value of mapEx) {
    console.log(value)
}

//FOR IN USING SET
for (const key in mapEx) {
    console.log(key)
}
console.log(mapEx.has("Name"))