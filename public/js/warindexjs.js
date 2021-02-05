function toggle(id) {
    a = document.getElementById('toggle_'+id);
    b = document.getElementById('display_'+id);
    c=document.getElementById('togle_'+id);
    d = document.getElementById('disply_'+id);
      if (a.style.display=='block') {
        a.style.display='none';
        b.innerHTML='View more';
      }
      else {
        a.style.display='block';
        b.innerHTML='Less Page';
    }
    if (c.style.display=='block') {
        c.style.display='none';
        d.innerHTML='Show Document/PDF';
      }
      else {
        c.style.display='block';
        d.innerHTML='Hide Document/PDF';
    }
  }