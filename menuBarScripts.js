function openDropdown(Did, meself) {

  if (meself != 'problemSolution') {
  document.getElementById('PSdropdown').style.opacity = 0;
  document.getElementById('problemSolution').style.backgroundColor = 'rgb(224, 245, 254)';
  document.getElementById('PSdropdown').style.zIndex = -1;
  }

  if (meself != 'elements') {
  document.getElementById('ELdropdown').style.opacity = 0;
  document.getElementById('elements').style.backgroundColor = 'rgb(224, 245, 254)';
  document.getElementById('ELdropdown').style.zIndex = -1;
  }

  if (meself != 'learningProcess') {
  document.getElementById('LPdropdown').style.opacity = 0;
  document.getElementById('learningProcess').style.backgroundColor = 'rgb(224, 245, 254)';
  document.getElementById('LPdropdown').style.zIndex = -1;
  }

  if (meself != 'futurePlans') {
  document.getElementById('FPdropdown').style.opacity = 0;
  document.getElementById('futurePlans').style.backgroundColor = 'rgb(224, 245, 254)';
  document.getElementById('FPdropdown').style.zIndex = -1;
  }

  if ((document.getElementById(Did).style.opacity) == 0) {
    document.getElementById(Did).style.opacity = 1;
    document.getElementById(meself).style.backgroundColor = 'rgb(99, 166, 194)';
    document.getElementById(Did).style.zIndex = 2;
  }
  else {
    document.getElementById(Did).style.opacity = 0;
    document.getElementById(meself).style.backgroundColor = 'rgb(224, 245, 254)';
    document.getElementById(Did).style.zIndex = -1;
  }
}