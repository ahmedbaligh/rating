import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getAllUsers, getAllRoles, updateUser } from '../../utils/api';
import { staticText } from '../../utils/data';

import RolesPage, { Overlay } from './Roles.styles';
import { AdminAssets } from '../../assets';
import { InputField, Dropdown } from '../../components';
import { LabeledDropDown } from '../Scraper/Scraper.styles';

const Roles = ({ authedUser, language }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [adminToEdit, setAdminToEdit] = useState(null);
  const [editUser, setEditUser] = useState(false);
  const [role, setRole] = useState([]);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState('');

  const onCancel = () => {
    setEditUser(false);
    setAdminToEdit(null);
    setError(null);
    setRole([roles[0].name.toUpperCase()]);
  };

  const onSave = e => {
    e.preventDefault();
    let newUser =
      adminToEdit ||
      users.find(
        user => user.userName === userInfo || user.emailAddress === userInfo
      );
    if (!newUser) {
      setError(staticText.roles.error[language]);
      return;
    }
    setError(null);
    newUser = { ...newUser, roleNames: role[0] === -1 ? [] : role };
    updateUser(newUser)
      .then(() => {
        setUsers(prev => [
          ...prev.filter(user => user.id !== newUser.id),
          newUser
        ]);
      })
      .finally(() => onCancel());
  };

  const onChange = e => {
    e.preventDefault();
    setUserInfo(e.target.value);
  };

  useEffect(() => {
    if (authedUser) {
      Promise.all([getAllUsers(), getAllRoles()]).then(([users, roles]) => {
        setUsers(users.data.result.items);
        setRoles(roles.data.result.items);
        setRole([roles.data.result.items[0].name.toUpperCase()]);
      });
    }
  }, [authedUser]);
  const admins = users.filter(user => user.roleNames.includes('ADMIN'));
  return (
    <RolesPage>
      <div className="roles-header">
        <h1>{staticText.roles.name[language]}</h1>
        <button onClick={() => setEditUser(true)}>
          {staticText.roles.add[language]}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>{staticText.roles.username[language]}</th>
            <th>{staticText.roles.email[language]}</th>
            <th>{staticText.roles.role[language]}</th>
          </tr>
        </thead>

        <tbody>
          {admins.map(admin => (
            <tr key={`admn${admin.id}`}>
              <td>{admin.userName}</td>
              <td>{admin.emailAddress}</td>
              <td>
                <button
                  onClick={() => {
                    setRole([admin.roleNames[0]]);
                    setAdminToEdit(admin);
                  }}
                >
                  <img src={AdminAssets.edit} alt="edit"></img>
                  {staticText.roles.admin[language]}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {adminToEdit || editUser ? (
        <Overlay>
          <form onChange={onChange} onSubmit={onSave}>
            <InputField
              required
              placeholder={`${staticText.roles.username[language]} ${staticText.roles.or[language]} ${staticText.roles.email[language]}`}
              label={staticText.roles.user[language]}
              disabled={adminToEdit}
              valueProp={adminToEdit?.userName || ''}
            />
            <LabeledDropDown>
              <label htmlFor="role-pick">
                {staticText.roles.role[language]}
              </label>
              <Dropdown
                id="role-pick"
                value={role[0]}
                options={[
                  ...roles?.map(role => ({
                    key: `rollist${role.id}`,
                    text: role.displayName,
                    value: role.name.toUpperCase()
                  })),
                  {
                    key: 'rollistremv0',
                    text: 'Remove',
                    value: -1
                  }
                ]}
                onChange={(_, { value }) => setRole([value])}
              />
            </LabeledDropDown>
            <div className="btns">
              <button onClick={onCancel}>
                {staticText.roles.cancel[language]}
              </button>
              <button className="save" type="submit">
                {' '}
                {staticText.roles.save[language]}
              </button>
            </div>
            {error && <span className="error">*{error}</span>}
          </form>
        </Overlay>
      ) : (
        ''
      )}
    </RolesPage>
  );
};

export default connect(({ authedUser, language }) => ({
  authedUser,
  language
}))(Roles);
