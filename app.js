const data = [
    {
        name: 'John Doe',
        age: 22,
        gender: 'Male',
        lookingFor: 'Female',
        location: 'Irvine, CA',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    {
        name: 'Alison Williams',
        age: 24,
        gender: 'Female',
        lookingFor: 'Male',
        location: 'Lake Forest, CA',
        image: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
    {
        name: 'Fatima Robertson',
        age: 34,
        gender: 'Female',
        lookingFor: 'Male',
        location: 'Orange, CA',
        image: 'https://randomuser.me/api/portraits/women/33.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML =
        `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
            </ul>
        `
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    } else {
        window.location.reload();
    }
    
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done:true}
        }
    };
}

