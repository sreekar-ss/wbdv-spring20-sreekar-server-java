package com.example.wbdvsp20sreekarserverjava.controllers;

import com.example.wbdvsp20sreekarserverjava.models.Topic;
import com.example.wbdvsp20sreekarserverjava.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TopicController {

    @Autowired
    TopicService topicService;

    @GetMapping("/api/topics")
    public List<Topic> findAllTopics() {
        return topicService.findAllTopics();
    }

    @GetMapping("/api/topics/{topicId}")
    public Topic findTopicById(@PathVariable("topicId") String topicId){
        if(topicId.equals("undefined")){
        //Keep a check here
            return null;
        }
        else {
            Integer tid = Integer.parseInt(topicId);
            return topicService.findTopicById(tid);
        }
    }

    @GetMapping("/api/lessons/{lessonId}/topics")
    public List<Topic> findTopicsForLesson(@PathVariable("lessonId") String lessonId){
//        if(lessonId.equals("undefined")){
//            List<Topic> dummyList = new ArrayList<>();
//            return dummyList;
//        }
//        else{
//            Integer lid = Integer.parseInt(lessonId);
            return topicService.findTopicsForLesson(lessonId);

    }

    @DeleteMapping("/api/topics/{topicId}")
    public int deleteTopic(@PathVariable("topicId") Integer tid){
        return topicService.deleteTopic(tid);
    }

    @PostMapping("/api/lessons/{lessonId}/topics")
    public Topic createTopic(@PathVariable("lessonId") String lid, @RequestBody Topic topic){
        topic.setLessonId(lid);
        return topicService.createTopic(topic);
    }

    @PutMapping("/api/topics/{topicId}")
    public Topic updateTopic(@PathVariable("topicId") Integer tid, @RequestBody Topic topic){
        return topicService.updateTopic(topic);
    }
}
