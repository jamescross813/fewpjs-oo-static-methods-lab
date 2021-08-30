class Formatter {
  //add static methods here

  static capitalize(string){
    let first = string[0].toUpperCase()
    let rest = string.slice(1)
    return first + rest
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let words = string.split(" ")
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    return this.capitalize(words.map(word =>{
      
      if(exceptions.includes(word)){
        return word
      }else{
        return this.capitalize(word)
      } 
    }).join(" "))
  }
}