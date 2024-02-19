import objJs from "./index.js";

// const obj = {
//   a: {
//     b: "A"
//   }
// }

// const clone = objJs.clone(obj);
// clone.a.b = "B";
// console.log(
//   obj,
//   clone
// )

const obj = {
  boolean: false,
  string: "String",
  number: 100,
  array: ["A","B","C"],
  object: {
    string: "D",
  },
}

const qry = {
  boolean: {
    $not: {
      $eq: true
    }
  },
  string: {
    $and: [
      {
        $in: ["String"]
      }, {
        $eq: "String"
      }, {
        $ne: "number"
      },
    ]
  },
  number: {
    $and: [
      {
        $gt: 99
      }, {
        $gte: 100
      }, {
        $lt: 101
      }, {
        $lte: 100
      }, {
        $eq: 100
      }, {
        $ne: 101
      }
    ]
  },
  array: {
    $and: [
      {
        $in: ["C", "B", "A"]
      }, {
        $eq: ["A", "B", "C"]
      }
    ]
  },
  object: {
    string: {
      $or: [
        {
          $eq: "C"
        }, {
          $eq: "D"
        }
      ]
    }
  }
}

console.log(
  objJs.query(obj, qry)
)