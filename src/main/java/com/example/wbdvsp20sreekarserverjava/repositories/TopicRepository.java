package com.example.wbdvsp20sreekarserverjava.repositories;

import com.example.wbdvsp20sreekarserverjava.models.Topic;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TopicRepository extends CrudRepository<Topic, Integer> {

    // SELECT * FROM topics WHERE lesson_id = lid
    @Query(value = "SELECT * FROM topics WHERE lesson_id = :lid", nativeQuery = true)
    public List<Topic> findTopicsForLesson(@Param("lid")String lessonId);
}
