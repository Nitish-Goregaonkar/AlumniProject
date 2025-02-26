function showHover(profile) {
    profile.querySelector('.hover-info').style.display = 'block';
}

function hideHover(profile) {
    profile.querySelector('.hover-info').style.display = 'none';
}

function viewProfile(name, phone) {
    // Handle the view profile action here
    alert(`Viewing profile for ${name}. Phone: ${phone}`);
    // You can redirect to a new page or display detailed information in a modal
}