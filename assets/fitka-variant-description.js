document.addEventListener('change', function (e) {
  if (e.target.matches('[name="id"]') || e.target.closest('variant-selects, variant-radios')) {
    const variantId = document.querySelector('[name="id"]')?.value;

    document.querySelectorAll('.variant-description').forEach((el) => {
      el.style.display = el.dataset.variantId === variantId ? 'block' : 'none';
    });

    document.querySelectorAll('.fitka-limited-badge').forEach((el) => {
      el.style.display = el.dataset.variantId === variantId ? 'inline-flex' : 'none';
    });
  }
});