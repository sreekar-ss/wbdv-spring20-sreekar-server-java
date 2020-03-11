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
}
