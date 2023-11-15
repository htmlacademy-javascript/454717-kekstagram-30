const renderStatus = (statusId) => {
  const template = document
    .querySelector(`#${statusId}`)
    .content
    .querySelector(`.${statusId}`);
  const status = template.cloneNode(true);
  document.body.append(status);

  setTimeout (() => {
    status.remove();
  }, 5000);
};

export {renderStatus};
