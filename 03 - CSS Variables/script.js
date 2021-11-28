const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  //dataset is a method use for get all data-something attibutes in the HTML, in our case we
  //want the sizing attribute value
  //We use '', because color doesnt have a suffix, and the function will return undefined
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
