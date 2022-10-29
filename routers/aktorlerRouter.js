const router = require("express").Router();
const { restart } = require("nodemon");
let data = require("../data.js");
const { findAktorById } = require("../data/data-model");
const Aktor = require("../data/data-model");

module.exports = router;

router.get("/", (req, res) => {
  Aktor.findAktor()
    .then((aktorler) => {
      res.status(200).json(aktorler);
    })
    .catch((error) => {
      next({
        statusCode: 500,
        errorMessage: "Aktorler alinirken bir hata oluştu",
        error: error,
      });
    });
});

router.post("/", (req, res, next) => {
  const yeniAktor = req.body;
  if (!yeniAktor.isim) {
    next({
      statusCode: 400,
      errorMessage: "Aktor ekleme için isim girmelisiniz",
    });
  } else {
    Aktor.addAktor(yeniAktor)
      .then((added) => {
        res.status(201).json(added);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Aktor eklerken bir hata oluştu",
          error,
        });
      });
  }
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Aktor.findAktorById(id)
    .then((silinecekAktor) => {
      Aktor.deleteAktor(id)
        .then((deleted) => {
          if (deleted) {
            res.status(201).json(`${deleted} kayıt silindi`).end();
          }
          next({
            statusCode: 400,
            errorMessage: "Belirtilen Aktor Sistemde Kayıtlı Değil.",
          });
        })
        .catch((error) => {
          next({
            statusCode: 500,
            errorMessage: "Aktor Silinirken Hata Oluştu",
            error,
          });
        });
    })
    .catch((error) => {
      next({
        statusCode: 400,
        errorMessage: "Aktor id'si sistemde mevcut değil",
      });
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Aktor.findAktorById(id)
    .then((aktor) => {
      if (aktor) {
        res.status(200).json(aktor);
      } else {
        next({
          statusCode: 400,
          errorMessage: "Aktor Bulunamadı",
        });
      }
    })
    .catch((error) => {
      next({
        statusCode: 400,
        errorMessage: "Aktor Bulunurken Hata oluştu.",
        error,
      });
    });
});

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;

  const updateAktor = req.body;

  if (!updateAktor.isim) {
    next({
      statusCode: 400,
      errorMessage: "Aktor ismi bos olamaz",
    });
  } else {
    Aktor.updateAktor(updateAktor, id)
      .then((updated) => {
        res.status(200).json(updated);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Aktor Düzenlenirken Hata oLuştu.",
          error,
        });
      });
  }
});
