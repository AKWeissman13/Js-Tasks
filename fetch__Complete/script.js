document.body.innerHTML = `
<div></div>
`;
let names = ["AKWeissman13", "naruto", "Casino"];
let infoData = getUsers(names);
console.log(infoData);
async function getUsers(names) {
  let infoData = [];
  for (let user of names) {
    let info = fetch(`https://api.github.com/users/${user}`).then(
      (response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          return null;
        }
      }
    );
    infoData.push(info);
  }
  let results = await Promise.all(infoData);
  return results;
}
