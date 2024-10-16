document.addEventListener("DOMContentLoaded", () => {
  const $app = document.getElementById("app");

  const $form = document.createElement("form");
  $form.enctype = "multipart/form-data";
  $form.className =
    "space-y-6 p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto";

  const $nameInput = document.createElement("input");
  $nameInput.type = "text";
  $nameInput.name = "name";
  $nameInput.placeholder = "Product Name";
  $nameInput.className =
    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  const $descriptionInput = document.createElement("input");
  $descriptionInput.type = "text";
  $descriptionInput.name = "description";
  $descriptionInput.placeholder = "Product Description";
  $descriptionInput.className =
    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  const $priceInput = document.createElement("input");
  $priceInput.type = "text";
  $priceInput.name = "price";
  $priceInput.placeholder = "Product Price";
  $priceInput.className =
    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  const $input = document.createElement("input");
  $input.type = "file";
  $input.name = "productImage";
  $input.accept = "image/*";
  $input.className =
    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  const $button = document.createElement("button");
  $button.textContent = "Accept";
  $button.className =
    "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  $form.appendChild($nameInput);
  $form.appendChild($descriptionInput);
  $form.appendChild($priceInput);
  $form.appendChild($input);
  $form.appendChild($button);

  $app.appendChild($form);

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch("http://localhost:4000/product", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
});
