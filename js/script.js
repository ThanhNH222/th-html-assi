
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const genderElems = document.getElementsByName('gender');
    let gender = '';
    for (let elem of genderElems) {
        if (elem.checked) {
            gender = elem.value;
            break;
        }
    }
    const hobbiesElems = document.getElementsByName('hobbies');
    let hobbies = [];
    for (let elem of hobbiesElems) {
        if (elem.checked) {
            hobbies.push(elem.value);
        }
    }
    const about = document.getElementById('about').value.trim();

    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('genderError').textContent = '';
    let isValid = true;

    if (fullName === '') {
        document.getElementById('fullNameError').textContent = 'Vui lòng nhập họ và tên.';
        isValid = false;
    } else if (fullName.length > 50) {
        document.getElementById('fullNameError').textContent = 'Họ và tên tối đa 50 ký tự.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Vui lòng nhập email.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Định dạng email không hợp lệ.';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Vui lòng nhập số điện thoại.';
        isValid = false;
        } else if (!/^\d+$/.test(phone)) {  // Kiểm tra chỉ có số
        document.getElementById('phoneError').textContent = 'Số điện thoại chỉ được phép nhập số.';
        isValid = false;
        } else if (phone.length !== 10) {  // Kiểm tra độ dài số điện thoại
        document.getElementById('phoneError').textContent = 'Số điện thoại phải có 10 chữ số.';
        isValid = false;
    }

    if (gender === '') {
        document.getElementById('genderError').textContent = 'Vui lòng chọn giới tính.';
        isValid = false;
    }

    if (isValid) {

        document.getElementById('displayFullName').textContent = fullName;
        document.getElementById('displayEmail').textContent = email;
        document.getElementById('displayPhone').textContent = phone;
        document.getElementById('displayGender').textContent = gender;
        document.getElementById('displayHobbies').textContent = hobbies.length > 0 ? hobbies.join(', ') : 'Không có';
        document.getElementById('displayAbout').textContent = about !== '' ? about : 'Không có';

        document.getElementById('form-container').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}