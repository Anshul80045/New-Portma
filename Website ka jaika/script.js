function openNav(){
    document.getElementById("navbar").style.right = "0";
}

function closeNav(){
    document.getElementById("navbar").style.right = "-250px";
}

function showForm(type){

    document.getElementById("webForm").style.display = "none";
    document.getElementById("designForm").style.display = "none";

    if(type === "web"){
        document.getElementById("webForm").style.display = "block";
    }

    if(type === "design"){
        document.getElementById("designForm").style.display = "block";
    }
}


const scriptURL = "https://script.google.com/macros/s/AKfycbx0ol86uVO5KMAIi3gGp815VEVEbmXtpKHnatQR01Vgc2X2W1N9s_IaypyWWhDUCtWziA/exec";

function handleSubmit(formId, serviceName) {
  const form = document.getElementById(formId);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedPlan = form.querySelector('input[name="plan"]:checked');

    const data = {
      service: serviceName,
      first_name: form.querySelector('input[name="first_name"]').value,
      last_name: form.querySelector('input[name="last_name"]').value,
      email: form.querySelector('input[name="email"]').value,
      phone: form.querySelector('input[name="phone"]').value,
      type: form.querySelector("select").value,
      plan: selectedPlan ? selectedPlan.value : ""
    };

    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
      alert("Submitted Successfully");
      form.reset();
    })
    .catch(error => {
      console.error(error);
      alert("Error occurred");
    });

  });
}

handleSubmit("webForm", "Web Development");
handleSubmit("designForm", "Graphic Design");