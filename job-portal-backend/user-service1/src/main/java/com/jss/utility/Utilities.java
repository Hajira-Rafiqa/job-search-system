package com.jss.utility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.jss.entity.Sequence;
import com.jss.exception.JobPortalException;

@Component
public class Utilities {
	
	private static MongoOperations mongoOperation;
	
	@Autowired
	public void setMongoOperation(MongoOperations mongoOperation) {
		Utilities.mongoOperation = mongoOperation;
	}
	
	public static Long getNextSequence(String key) throws JobPortalException {
		Query query = new Query(Criteria.where("_id").is(key));
		Update update = new Update();
		update.inc("seq", 1);
		FindAndModifyOptions options = new FindAndModifyOptions();
		options.returnNew(true);
		Sequence seq = mongoOperation.findAndModify(query, update, options, Sequence.class);
		
		if (seq == null) throw new JobPortalException("Unable to get sequence id for key :" + key);
		
		return seq.getSeq();
	}

}
