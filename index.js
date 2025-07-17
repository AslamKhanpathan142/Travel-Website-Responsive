
 let inputPassword5 = document.querySelector("#inputPassword5");

		let logo = document.querySelector("#logo2");
		let logo1 = document.querySelector("#logo3");
		logo.addEventListener("click", () => {
			inputPassword5.type = "text";
		});

		logo1.addEventListener("click", () => {
			inputPassword5.type = "password";
		});


        $(document).ready(function (){
			$("#logo2").click(function() {
				$("#logo3").show();
				$(this).hide();
				
			});
			
			$("#logo3").click(function () {
				$("#logo2").show();
				$(this).hide();
				
			});
		});
		
		// sing up validation

		let error = document.querySelector("#error");
		let error2 = document.querySelector("#error2");
		let error3 = document.querySelector("#error3");
		let error4 = document.querySelector("#error4");
		let error5 = document.querySelector("#error5");
		let error6 = document.querySelector("#error6");
		let error7 = document.querySelector("#error7");
		

		let fname = document.querySelector(".fname");
		let lname = document.querySelector(".lname");
		let Address = document.querySelector(".Address");
		let mobile = document.querySelector(".mobile");
		let email = document.querySelector(".email");
		let passward = document.querySelector(".passward");
		let cpassward = document.querySelector(".cpassward");

		function validateForm() {
			if (fname.value.length == " ") {
				error.innerText = "Please Enter Your First Name";
				error.style.color = "red";
				return false;
			}

			if (lname.value.length == " ") {
				error2.innerText = "Please Enter Your Last Name";
				error2.style.color = "red";
				return false;
			}

			if (Address.value.length < 10) {
				error3.innerText = "Please Enter the Maximum 10 Character";
				error3.style.color = "red";
				return false;
			}

			if(mobile.value.length != 10)
			{
				error4.innerText = "Please Enter the 10 Number";
				error4.style.color = "red";
				return false;
			}

			if(email.value.length == " ")
    		{
        		error5.innerText = "Please Enter Email";
				error5.style.color = "red";
        		return false;
    		}

			if(passward.value.length < 8)
    		{
        		error6.innerText = "Please Enter The Maximum 8 Letter";
				error6.style.color = "red";
        		return false;
    		}

			if(cpassward.value != passward.value)
    		{
        		error6.innerText = "Passward Is Not Matched";
				error6.style.color = "red";
        		return false;
    		}

		}

		// sign in
		let email2 = document.querySelector(".email2");
		let passward2 = document.querySelector(".passward2");
		let error8 = document.querySelector(".error8");
		let error9 = document.querySelector(".error9");

		function validateForm2() 
		{
			if(email.value != email2.value)
    		{
        		error8.innerText = "Please Enter Valid Email";
				error8.style.color = "red";
        		return false;
    		}

			if(passward.value != passward2.value)
    		{
        		error9.innerText = "Please Enter The Valid Passward";
				error9.style.color = "red";
        		return false;
    		}
		}
		let body = document.querySelector("body");
		let tiffin2 = document.querySelector(".tiffin_2");
		window.onload = () => {
			alert("hiii hhhhh");
		};

				Tooltip
		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
		const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

		
		let card1 = document.querySelectorAll("card-1");
		card1.forEach((box) => {
			newbtn.addEventListener("click", () => {
				box.innerText = '';
				hide.classList.add("hide");
				box.disabled = false;
			});
		});

		let card = document.querySelectorAll("card-1");
        card.forEach((cards) => {
            card.addEventListener("click", () => {
                cards.style.backgroundColor = "red";
            });
        });
		