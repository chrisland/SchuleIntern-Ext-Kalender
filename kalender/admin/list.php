<?php

class extKalenderAdminList extends AbstractPage {
	
	public static function getSiteDisplayName() {
		return '<i class="fa fas fa-plug"></i> Kalender - Liste';
	}

	public function __construct($request = [], $extension = []) {
		parent::__construct(array( self::getSiteDisplayName() ), false, false, false, $request, $extension);
		$this->checkLogin();
	}

	public function execute() {

		//$this->getRequest();
		//$this->getAcl();

        $user = DB::getSession()->getUser();

        if ( !$user->isAnyAdmin() ) {
            new errorPage('Kein Zugriff');
        }

        $this->render([
            "tmplHTML" => '<div class="box"><div class="box-body"><div id=app></div></div></div>',
            "scripts" => [
                PATH_EXTENSION.'tmpl/scripts/list/dist/main.js'
            ],
            "data" => [
                "apiURL" => "rest.php/kalender"
            ]

        ]);

	}





}
