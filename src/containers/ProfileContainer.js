import React, {Component} from 'react';
import Profile from '../components/Profile';
import ProfileModel from '../models/profile';


class ProfileContainer extends Component {

	state={
	name: this.props.name,
	city: this.props.city,
	date: this.props.date,
	posts: this.props.posts,
	}

	updateProfile = (user) => {
        const isUpdatedUser = p => {
            return p._id === user._id;
        };
        ProfileModel.update(user)
            .then((res) => {
                let user =this.state.user;
                user.find(isUpdatedUser).name = user.name;
                user.find(isUpdatedUser).city = user.city;
                this.setState({user: user})
            });
    }

	render() {
		return(
			<div>
				<Profile
					name={this.state.name}
					city={this.state.city}
					date={this.state.date}
					posts={this.state.posts}
                    updateProfile={this.updateProfile}
					 />
			</div>
			)
	}
}

export default ProfileContainer