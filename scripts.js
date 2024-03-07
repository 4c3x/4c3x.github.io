function updateDateTime() {
            var now = new Date();
            var optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };
            var optionsTime = { hour: 'numeric', minute: 'numeric' };

            var formattedDate = now.toLocaleString('en-US', optionsDate);
            var formattedTime = now.toLocaleString('en-US', optionsTime);

            document.getElementById('datetime').textContent = formattedTime + ' | ' + formattedDate;
        }

        setInterval(updateDateTime, 1000);
        updateDateTime();

        function toggleGreyArea() {
            var greyArea = document.querySelector('.grey-area');
            greyArea.style.display = (greyArea.style.display === 'none' || greyArea.style.display === '') ? 'block' : 'none';
        }

        function closeGreyArea() {
            document.querySelector('.grey-area').style.display = 'none';
        }

        

         function prevBlankArea2() {
            document.querySelector('.blank-area-2').style.display = 'none';
        }

        function prevBlankArea3() {
            document.querySelector('.blank-area-3').style.display = 'none';
        }

        function prevper_pro_icon1() {
            document.querySelector('.per-pro-1').style.display = 'none';
        }

        function prevper_pro_icon2() {
            document.querySelector('.per-pro-2').style.display = 'none';
        }

        function prevper_pro_icon3() {
            document.querySelector('.per-pro-3').style.display = 'none';
        }

        function prevper_pro_icon4() {
            document.querySelector('.per-pro-4').style.display = 'none';
        }

        function prevsec_lab_icon1() {
            document.querySelector('.sec-lab-1').style.display = 'none';
        }

        function prevsec_lab_icon2() {
            document.querySelector('.sec-lab-2').style.display = 'none';
        }

        function prevsec_lab_icon3() {
            document.querySelector('.sec-lab-3').style.display = 'none';
        }

        function prevsec_lab_icon4() {
            document.querySelector('.sec-lab-4').style.display = 'none';
        }

        document.querySelector('.icon-c').addEventListener('click', function () {
            document.querySelector('.blank-area').style.display = 'flex';
        });

        // Add click event for the Personal Projects icon1
        document.querySelector('.Personal-Projects-icon-a').addEventListener('click', function () {
            document.querySelector('.per-pro-1').style.display = 'flex';
        });

        // Add click event for the Personal Projects icon2
        document.querySelector('.Personal-Projects-icon-b').addEventListener('click', function () {
            document.querySelector('.per-pro-2').style.display = 'flex';
        });

        // Add click event for the Personal Projects icon3
        document.querySelector('.Personal-Projects-icon-c').addEventListener('click', function () {
            document.querySelector('.per-pro-3').style.display = 'flex';
        });

        // Add click event for the Personal Projects icon4
        document.querySelector('.Personal-Projects-icon-d').addEventListener('click', function () {
            document.querySelector('.per-pro-4').style.display = 'flex';
        });

        // Add click event for the Security Labs icon1
        document.querySelector('.security-labs-icon-a').addEventListener('click', function () {
            document.querySelector('.sec-lab-1').style.display = 'flex';
        });

         // Add click event for the Security Labs icon2
        document.querySelector('.security-labs-icon-b').addEventListener('click', function () {
            document.querySelector('.sec-lab-2').style.display = 'flex';
        });

        // Add click event for the Security Labs icon3
        document.querySelector('.security-labs-icon-c').addEventListener('click', function () {
            document.querySelector('.sec-lab-3').style.display = 'flex';
        });

        // Add click event for the Security Labs icon4
        document.querySelector('.security-labs-icon-d').addEventListener('click', function () {
            document.querySelector('.sec-lab-4').style.display = 'flex';
        });

        // Add click event for the Security Labs icon
        document.querySelector('.blank-icon-b').addEventListener('click', function () {
            document.querySelector('.blank-area-2').style.display = 'flex';
        });

        // Add click event for the Personal Projects icon
        document.querySelector('.blank-icon-a').addEventListener('click', function () {
            document.querySelector('.blank-area-3').style.display = 'flex';
        });
       
         function closeBlankArea2() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-2').style.display = 'none';
        } 

 function closeBlankArea3() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-3').style.display = 'none';
        } 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
       function closeper_pro_icon1() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-3').style.display = 'none';
            document.querySelector('.per-pro-1').style.display = 'none';
        } 

       function closeper_pro_icon2() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-3').style.display = 'none';
            document.querySelector('.per-pro-2').style.display = 'none';
        }        

       function closeper_pro_icon3() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-3').style.display = 'none';
            document.querySelector('.per-pro-3').style.display = 'none';
        }  

        function closeper_pro_icon4() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-3').style.display = 'none';
            document.querySelector('.per-pro-4').style.display = 'none';
        }  

       function closesec_lab_icon1() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-2').style.display = 'none';
            document.querySelector('.sec-lab-1').style.display = 'none';
        }

        function closesec_lab_icon2() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-2').style.display = 'none';
            document.querySelector('.sec-lab-2').style.display = 'none';
        }

        function closesec_lab_icon3() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-2').style.display = 'none';
            document.querySelector('.sec-lab-3').style.display = 'none';
        }

        function closesec_lab_icon4() {
            document.querySelector('.blank-area').style.display = 'none';
            document.querySelector('.blank-area-2').style.display = 'none';
            document.querySelector('.sec-lab-4').style.display = 'none';
        }

        
        function closeBlankArea() {
            document.querySelector('.blank-area').style.display = 'none';
        }

        function stopPropagation() {
            event.stopPropagation();
        }

        // Close grey area when clicking outside it
        document.addEventListener('click', function (event) {
            const greyArea = document.querySelector('.grey-area');
            if (!event.target.closest('.grey-area') && !event.target.closest('.icon-b')) {
                if (greyArea.style.display === 'block') {
                    closeGreyArea();
                }
            }
        });

        function openLinkedInProfile() {
            window.open('https://www.linkedin.com/in/ansi-dagus-a1837427b/', '_blank');
        }
        
        function openGithubProfile() {
            window.open('https://github.com/4c3x', '_blank');
        }
         
        function openResume() {
            window.open('https://drive.google.com/file/d/1L_QykaimfkBnejvrgI5Tu532Xt2ojRHt/view?usp=drivesdk', '_blank');
        }
       
