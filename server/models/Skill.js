import { DataTypes } from 'sequelize';

import db from '../services/db.js';

export default db.define(
    'skill',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        attribute: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize: db,
        modelName: 'Skill',
        timestamps: false,
    },
);