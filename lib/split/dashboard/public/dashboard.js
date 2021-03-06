function confirmReset() {
  var agree=confirm("This will delete all data for this experiment?");
  if (agree)
    return true;
  else
    return false;
}

function confirmDelete() {
  var agree=confirm("Are you sure you want to delete this experiment and all its data?");
  if (agree)
    return true;
  else
    return false;
}

function confirmWinner() {
  var agree=confirm("This will now be returned for all users. Are you sure?");
  if (agree)
    return true;
  else
    return false;
}

function confirmAdd() {
  var agree=confirm("Changing alternates will delete all the data for this experiment.  Are you sure you want to do this?");
  if (agree)
    return true;
  else
    return false;
}

function showAdd() {
  document.getElementById('add-alternative').className += ' show';
  return false;
}
