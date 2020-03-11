package com.example.wbdvsp20sreekarserverjava.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "widgets")
public class Widget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title= "New Widget";
//    private String topicId;
    private String type;
    private int size = 2;
    private int indexorder = -1;

    @ManyToOne
    @JsonIgnore
    private Topic topic;

    public int getIndex() { return indexorder; }

    public void setIndex(int indexorder) { this.indexorder = indexorder; }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

//    public String getTopicId() {
//        return topicId;
//    }
//
//    public void setTopicId(String topicId) {
//        this.topicId = topicId;
//    }

    public void setTopicId(Integer topicId) {
        this.topic = new Topic();
        this.topic.setId(topicId);
    }

    public int getTopicId() {
        return this.topic.getId();
    }

    public Widget() {
    }

    public Widget(Integer id, String title) {
        this.id = id;
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
