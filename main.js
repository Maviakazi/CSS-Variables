const inputs = document.querySelectorAll('.controls input');

function updateHandler() {
    suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    );
}

inputs.forEach((input) => input.addEventListener('change', updateHandler));
inputs.forEach((input) => input.addEventListener('mousemove', updateHandler));
