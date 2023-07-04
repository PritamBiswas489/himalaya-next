// {parse(activity.description).length > 0 ? parse(activity.description)[0].props.children.slice(0, 250):parse(activity.description).props.children.slice(0, 150)}
import parse from 'html-react-parser';
export default function removeTags(str) {
    
    // console.log(parse(str));
    if ((str===null) || (str==='') || typeof (str==='undefined'))
        return '';
     
          
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, "");
}