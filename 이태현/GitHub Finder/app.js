const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== ''){
        github.getUser(userText)
        .then(data => {
            console.log(data);

            if (data.profile.message === 'Not Found') {
                ui.showAlert('해당 사용자가 존재하지 않습니다!', 'alert alert-danger');

            } else {
                ui.showProfile(data.profile);
                ui.showRepository(data.repos);
            }
            
        })
    } else {
        ui.clearProfile();
    }
});