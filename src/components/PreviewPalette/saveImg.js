export const saveImg = (uri, filename, text) => {
  let link = document.createElement('a');

  document.body.appendChild(link);

  link.href = uri;
  link.download = `${text.split(' ').join('_')}.png`;
  link.click();

  document.body.removeChild(link);
};