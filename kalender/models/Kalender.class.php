<?php
/**
 *
 */
class extKalenderModelKalender
{

    /**
     * @var data []
     */
    private $data = [];


    /**
     * Constructor
     * @param $data
     */
    public function __construct($data = false)
    {
        if (!$data) {
            $data = $this->data;
        }
        $this->setData($data);
    }

    /**
     * @return data
     */
    public function setData($data = [])
    {
        $this->data = $data;
        return $this->getData();
    }

    /**
     * @return data
     */
    public function getData() {
        return $this->data;
    }


    /**
     * Getter
     */
    public function getID() {
        return $this->data['id'];
    }
    public function getTitle() {
        return $this->data['title'];
    }
    public function getState() {
        return $this->data['state'];
    }
    public function getColor() {
        return $this->data['color'];
    }
    public function getSort() {
        return $this->data['sort'];
    }
    public function getPreSelect() {
        return $this->data['preSelect'];
    }
    public function getAcl() {
        return $this->data['acl'];
    }
    public function getFerien() {
        return $this->data['ferien'];
    }
    public function getPublic() {
        return $this->data['public'];
    }


    /**
     * Collection
     */

    public function getCollection($full = false) {

        $collection = [
            "id" => $this->getID(),
            "title" => $this->getTitle(),
            "state" => $this->getState(),
            "color" => $this->getColor(),
            "sort" => $this->getSort(),
            "preSelect" => $this->getPreSelect(),
            "acl" => $this->getAcl(),
            "ferien" => $this->getFerien(),
            "public" => $this->getPublic(),
        ];
        if ($full == true) {


        }

        return $collection;
    }



    /**
     * @return Array[]
     */
    public static function getAll() {

        $ret =  [];
        $dataSQL = DB::getDB()->query("SELECT  a.*
            FROM ext_kalender as a
            WHERE state = 1
            ORDER BY a.sort ");
        while ($data = DB::getDB()->fetch_array($dataSQL, true)) {
            $ret[] = new self($data);
        }
        return $ret;
    }






}