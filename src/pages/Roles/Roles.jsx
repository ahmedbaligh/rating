import React, { useEffect, useState } from 'react';

import { getAllUsers, getAllRoles, updateUser } from '../../utils/api';

import RolesPage, { Overlay } from './Roles.styles';
import { AdminAssets } from '../../assets';
import { InputField, Dropdown } from '../../components';
import { LabeledDropDown } from '../Scraper/Scraper.styles';

const Roles = () => {
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
      setError('user not found');
      return;
    }

    newUser = { ...newUser, roleNames: role[0] === -1 ? [] : role };
    updateUser(newUser).then(() => {
      setUsers(prev => [
        ...prev.filter(user => user.id !== newUser.id),
        newUser
      ]);
    });
  };

  const onChange = e => {
    e.preventDefault();
    setUserInfo(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      Promise.all([getAllUsers(), getAllRoles()]).then(([users, roles]) => {
        console.log(users.data.result.items);
        setUsers(users.data.result.items);
        setRoles(roles.data.result.items);
        setRole([roles.data.result.items[0].name.toUpperCase()]);
      });
    }, 2000);
  }, []);
  const admins = users.filter(user => user.roleNames.includes('ADMIN'));
  return (
    <RolesPage>
      <div className="roles-header">
        <h1>Roles</h1>
        <button onClick={() => setEditUser(true)}>+ Add Role</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
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
                  <img src={AdminAssets.edit} alt="edit"></img>Admin
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
              placeholder="Email or Username"
              label="User"
              disabled={adminToEdit}
              valueProp={adminToEdit?.userName || ''}
            />
            <LabeledDropDown>
              <label htmlFor="role-pick">Role</label>
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
              <button onClick={onCancel}>Cancel</button>
              <button className="save" type="submit">
                {' '}
                Save changes
              </button>
            </div>
          </form>
        </Overlay>
      ) : (
        ''
      )}
    </RolesPage>
  );
};

export default Roles;
