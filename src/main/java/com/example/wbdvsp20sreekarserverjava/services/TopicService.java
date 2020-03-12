package com.example.wbdvsp20sreekarserverjava.services;


import com.example.wbdvsp20sreekarserverjava.models.Topic;
import com.example.wbdvsp20sreekarserverjava.repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {

    @Autowired
    TopicRepository topicRepository;

    public List<Topic> findAllTopics(){
        return (List<Topic>) topicRepository.findAll();
    }

    public Topic findTopicById(Integer tid) {

        return topicRepository.findById(tid).get();
    }

    public List<Topic> findTopicsForLesson(String lessonId) {
        return topicRepository.findTopicsForLesson(lessonId);
    }

    public int deleteTopic(Integer tid){
        topicRepository.deleteById(tid);
        return 1;
    }

    public Topic createTopic (Topic topic){
        return topicRepository.save(topic);
    }

    public Topic updateTopic(Topic topic){
        return topicRepository.save(topic);
    }
}
