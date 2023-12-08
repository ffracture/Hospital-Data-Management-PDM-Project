class SiteController {
    //[GET]  /
    homepage(req, res) {
        res.json({ msg: "Home" });
        // UI will render something depend on frontend and UI (do not have response data)
    }
    showUser(req, res) {
        res.status(200).json({ success: true });
    }
}

module.exports = new SiteController();
