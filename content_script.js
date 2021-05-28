if (document.readyState === "complete") {
  backtoZkill();
} else {
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      backtoZkill();
    }
  };
}

const backtoZkill = async () => {
  await delay(1000); // delay 2s since br.evetools uses semi-random strings for class names, we cannot trigger on load of any particular element
  const links_to_replace = new RegExp(/.*evetools\.org\/(kill|character|corporation|alliance|ship|system|constellation|region).*/);
  let elements = document.getElementsByTagName("a");
  for (const element of elements) {
      if (links_to_replace.test(element.href) === true) {
          let link = element.href
          var replacedLink = link.replace(/kb\.evetools.org/gi, "zkillboard.com");
          if (replacedLink !== link) {
              element.setAttribute("href", replacedLink)
          }
      }
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

