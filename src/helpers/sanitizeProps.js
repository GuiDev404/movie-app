const sanitizeProps = res => {
  let props = Object.entries(res);
  let validProps = props.filter(ele=> ele[1] !== 'N/A');
  let details = validProps.reduce((acc,ele)=> {
    let [ key, val ] = ele;
    acc[key] = val;
    return acc;
  } ,{})

  return details;
}

export default sanitizeProps;