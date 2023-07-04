 export default function removeTags(str) {
    
    // console.log(parse(str));
    if ((str===null) || (str==='') || typeof str==='undefined')
        return '';
     
          
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, "");
}