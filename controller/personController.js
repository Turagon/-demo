const db = require('../models')
const person = db.person
const Op = db.Sequelize.Op
const sequelize = db.sequelize
const { QueryTypes } = require('sequelize')

const personController = {
  getPersons: async(req, res) => {
    const persons = await person.findAll({ raw: true, nest: true })
    return res.render('persons', { persons })
  },

  // getSort: async(req, res) => {
  //   const gender = req.body.gender
  //   const age = Number(req.body.age)
  //   const persons = await person.findAll({
  //     raw: true,
  //     nest: true,
  //     where: {
  //       gender: gender,
  //       age: { [Op.gt]: age }
  //     }
  //   })
  //   res.render('persons', { persons, gender, age })
  // }

  // getSort: async(req, res) => {
  //   let gender = gender2 = req.body.gender
  //   if (gender === 'All') {
  //     gender = 'M'
  //     gender2 = 'F'
  //   }
  //   const age = Number(req.body.age)
  //   const persons = await person.findAll({
  //     raw: true,
  //     nest: true,
  //     where: {
  //       [Op.and]: [
  //         {
  //           [Op.or]: [
  //             { gender: gender },
  //             { gender: gender2 }
  //           ]
  //         },
  //         {
  //           age: { [Op.gt]: age }
  //         }
  //       ]
  //     }
  //   })
  //   res.render('persons', { persons, gender, age })
  // }

  getSort: async(req, res) => {
    let tblName = 'people', gender = encodeURI(req.body.gender), age = encodeURI(req.body.age)
    let sqlQuery = `SELECT * FROM ${tblName} WHERE gender=$1 AND age>$2`
    const persons = await sequelize.query(sqlQuery,
        { type: QueryTypes.SELECT,
          raw: true,
          nest: true,
          bind: [gender, age]
        },  // 指定sql为SELECT
      )
    age = Number(req.body.age)
    res.render('persons', { persons, gender, age })
  }
}

module.exports = personController