        // Mobile menu toggle
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('active');
        });

        // Password protection toggle
        document.getElementById('passwordProtected').addEventListener('change', function() {
            const passwordFields = document.getElementById('passwordFields');
            if (this.checked) {
                passwordFields.style.display = 'block';
                passwordFields.style.animation = 'fadeIn 0.3s ease';
            } else {
                passwordFields.style.display = 'none';
            }
        });

        // Password strength meter
        document.getElementById('password').addEventListener('input', function() {
            const strengthBar = document.getElementById('passwordStrengthBar');
            const password = this.value;
            let strength = 0;
            
            if (password.length > 0) strength += 20;
            if (password.length >= 8) strength += 20;
            if (/[A-Z]/.test(password)) strength += 20;
            if (/[0-9]/.test(password)) strength += 20;
            if (/[^A-Za-z0-9]/.test(password)) strength += 20;
            
            strengthBar.style.width = strength + '%';
            
            if (strength < 40) {
                strengthBar.style.backgroundColor = '#ff5252';
            } else if (strength < 80) {
                strengthBar.style.backgroundColor = '#ffab40';
            } else {
                strengthBar.style.backgroundColor = '#4caf50';
            }
        });

        // Watermark preview
        const watermarkInputs = ['watermarkText', 'watermarkFont', 'fontSize', 'semiTransparent'];
        watermarkInputs.forEach(id => {
            document.getElementById(id).addEventListener('input', updateWatermarkPreview);
            document.getElementById(id).addEventListener('change', updateWatermarkPreview);
        });

        function updateWatermarkPreview() {
            const watermarkText = document.getElementById('watermarkText').value || 'CONFIDENTIAL';
            const watermarkFont = document.getElementById('watermarkFont').value;
            const fontSize = document.getElementById('fontSize').value;
            const isTransparent = document.getElementById('semiTransparent').checked;
            
            const preview = document.getElementById('watermarkPreview');
            preview.textContent = watermarkText;
            preview.style.fontFamily = watermarkFont;
            preview.style.fontSize = fontSize + 'pt';
            preview.style.opacity = isTransparent ? '0.3' : '0.5';
        }

        // Initialize watermark preview
        updateWatermarkPreview();

        // Save button animation
        document.querySelector('.btn-primary').addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.remove('pulse');
            this.textContent = 'Saving...';
            
            setTimeout(() => {
                this.textContent = 'Saved!';
                this.style.backgroundColor = '#4caf50';
                
                setTimeout(() => {
                    this.textContent = 'Save Settings';
                    this.style.backgroundColor = '';
                    this.classList.add('pulse');
                }, 1500);
            }, 1000);
        });
