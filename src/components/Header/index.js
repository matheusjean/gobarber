import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-purple.svg';
import Notifications from '~/components/Notifications/index';

export default function Header() {
    const profile = useSelector((state) => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />

                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src={
                                (profile.avatar && profile.avatar.url) ||
                                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F274900%2Favatar_badge_business_circle_human_id_male_man_people_person_profile_user_icon&psig=AOvVaw2b0SZzq8cAuZGSgTUsYcy0&ust=1614718416596000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCz_oL9j-8CFQAAAAAdAAAAABAD'
                            }
                            alt={profile.name}
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
