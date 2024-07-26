document.querySelectorAll('.custom_select').forEach(select => {
    const selectText = select.querySelector('.custom_select_text');
    const options = select.querySelector('.custom_options');
    const input = select.nextElementSibling;
  
    select.addEventListener('click', () => {
      document.querySelectorAll('.custom_select').forEach(otherSelect => {
        if (otherSelect !== select) {
          otherSelect.classList.remove('open');
        }
      });
      select.classList.toggle('open');
    });
  
    options.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        selectText.textContent = e.target.textContent;
        input.value = e.target.dataset.value;
    }
});
select.classList.remove('open');
  });
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom_select')) {
      document.querySelectorAll('.custom_select').forEach(select => {
        select.classList.remove('open');
      });
    }
  });
  